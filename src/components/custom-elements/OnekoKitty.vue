<script setup lang="ts">
import { useEventListener, useTimeoutFn } from '@vueuse/core';
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';
import onekoGif from '@/assets/oneko.gif?no-inline';

const { cat, pettable = true, scrolls = true } = defineProps<{
    cat?: string;
    pettable?: boolean;
    scrolls?: boolean;
}>();

// oneko.js: https://github.com/adryd325/oneko.js

const isReducedMotion =
    // @ts-expect-error idk why this is here
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

const stopped = ref(false);

const nekoElRef = useTemplateRef("onekoKitty");
onMounted(() => {
    if (isReducedMotion) return;

    stopped.value = false;
    const nekoEl = nekoElRef.value!;

    let nekoPosX = 32;
    let nekoPosY = 32;

    let mousePosX = 0;
    let mousePosY = 0;

    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;

    const nekoSpeed = 10;
    const spriteSets: Record<string, [xTile: number, yTile: number][]> = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        scratchSelf: [
            [-5, 0],
            [-6, 0],
            [-7, 0],
        ],
        scratchWallN: [
            [0, 0],
            [0, -1],
        ],
        scratchWallS: [
            [-7, -1],
            [-6, -2],
        ],
        scratchWallE: [
            [-2, -2],
            [-2, -3],
        ],
        scratchWallW: [
            [-4, 0],
            [-4, -1],
        ],
        tired: [[-3, -2]],
        sleeping: [
            [-2, 0],
            [-2, -1],
        ],
        N: [
            [-1, -2],
            [-1, -3],
        ],
        NE: [
            [0, -2],
            [0, -3],
        ],
        E: [
            [-3, 0],
            [-3, -1],
        ],
        SE: [
            [-5, -1],
            [-5, -2],
        ],
        S: [
            [-6, -3],
            [-7, -2],
        ],
        SW: [
            [-5, -3],
            [-6, -1],
        ],
        W: [
            [-4, -2],
            [-4, -3],
        ],
        NW: [
            [-1, 0],
            [-1, -1],
        ],
    };

    function init() {
        nekoEl.id = "oneko";
        nekoEl.ariaHidden = 'true';
        nekoEl.style.width = "32px";
        nekoEl.style.height = "32px";
        nekoEl.style.position = "fixed";
        nekoEl.style.pointerEvents = "none";
        nekoEl.style.imageRendering = "pixelated";
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
        nekoEl.style.zIndex = '2147483647';

        const nekoFile = cat ?? onekoGif;
        nekoEl.style.backgroundImage = `url(${nekoFile})`;

        useEventListener(document, 'mousemove', event => {
            mousePosX = event.clientX;
            mousePosY = event.clientY;
        });

        if (scrolls) {
            // https://github.com/adryd325/oneko.js/compare/main...rozbrajaczpoziomow:fork-oneko.js:main
            useEventListener(document, "wheel", event => {
                nekoPosY += event.deltaY / 10;
                updatePos();
            });
        }

        window.requestAnimationFrame(onAnimationFrame);
    }

    let lastFrameTimestamp: DOMHighResTimeStamp;

    function onAnimationFrame(timestamp: DOMHighResTimeStamp) {
        // Stops execution if the neko element is removed from DOM
        if (!nekoEl.isConnected) {
            return;
        }
        if (!lastFrameTimestamp) {
            lastFrameTimestamp = timestamp;
        }
        if (timestamp - lastFrameTimestamp > 100) {
            lastFrameTimestamp = timestamp;
            frame();
        }

        if (!stopped.value)
            window.requestAnimationFrame(onAnimationFrame);
    }

    function setSprite(name: string, frame: number) {
        const sprite = spriteSets[name][frame % spriteSets[name].length];
        nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    function resetIdleAnimation() {
        idleAnimation = null;
        idleAnimationFrame = 0;
    }

    function idle() {
        idleTime += 1;

        // every ~ 20 seconds
        if (
            idleTime > 10 &&
            Math.floor(Math.random() * 200) == 0 &&
            idleAnimation == null
        ) {
            const availableIdleAnimations = ["sleeping", "scratchSelf"];
            if (nekoPosX < 32) {
                availableIdleAnimations.push("scratchWallW");
            }
            if (nekoPosY < 32) {
                availableIdleAnimations.push("scratchWallN");
            }
            if (nekoPosX > window.innerWidth - 32) {
                availableIdleAnimations.push("scratchWallE");
            }
            if (nekoPosY > window.innerHeight - 32) {
                availableIdleAnimations.push("scratchWallS");
            }
            idleAnimation = availableIdleAnimations[
                Math.floor(Math.random() * availableIdleAnimations.length)
            ];
        }

        switch (idleAnimation) {
            case "sleeping":
                if (idleAnimationFrame < 8) {
                    setSprite("tired", 0);
                    break;
                }
                setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
                if (idleAnimationFrame > 192) {
                    resetIdleAnimation();
                }
                break;
            case "scratchWallN":
            case "scratchWallS":
            case "scratchWallE":
            case "scratchWallW":
            case "scratchSelf":
                setSprite(idleAnimation, idleAnimationFrame);
                if (idleAnimationFrame > 9) {
                    resetIdleAnimation();
                }
                break;
            default:
                setSprite("idle", 0);
                return;
        }
        idleAnimationFrame += 1;
    }

    // https://github.com/adryd325/oneko.js/compare/main...tylxr59:oneko.js:main
    function explodeHearts() {
        const parent = nekoEl.parentElement;
        const rect = nekoEl.getBoundingClientRect();
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const centerX = rect.left + rect.width / 2 + scrollLeft;
        const centerY = rect.top + rect.height / 2 + scrollTop;

        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤';
            const offsetX = (Math.random() - 0.5) * 50;
            const offsetY = (Math.random() - 0.5) * 50;
            heart.style.left = `${centerX + offsetX - 16}px`;
            heart.style.top = `${centerY + offsetY - 16}px`;
            heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
            parent?.append(heart);

            useTimeoutFn(() => {
                heart.remove();
            }, 1000);
        }
    }

    if (pettable) {
        useEventListener(nekoEl, 'click', explodeHearts);
    }

    function frame() {
        frameCount += 1;
        const diffX = nekoPosX - mousePosX;
        const diffY = nekoPosY - mousePosY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < nekoSpeed || distance < 48) {
            idle();
            return;
        }

        idleAnimation = null;
        idleAnimationFrame = 0;

        if (idleTime > 1) {
            setSprite("alert", 0);
            // count down after being alerted before moving
            idleTime = Math.min(idleTime, 7);
            idleTime -= 1;
            return;
        }

        let direction;
        direction = diffY / distance > 0.5 ? "N" : "";
        direction += diffY / distance < -0.5 ? "S" : "";
        direction += diffX / distance > 0.5 ? "W" : "";
        direction += diffX / distance < -0.5 ? "E" : "";
        setSprite(direction, frameCount);

        nekoPosX -= (diffX / distance) * nekoSpeed;
        nekoPosY -= (diffY / distance) * nekoSpeed;

        nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
        nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

        updatePos();
    }

    function updatePos() {
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    init();
});

onBeforeUnmount(() => {
    stopped.value = true;
});

</script>

<template>
    <Teleport to="body">
        <div ref="onekoKitty"></div>
    </Teleport>
</template>

<style lang="scss">
@keyframes heartBurst {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}
.heart {
    position: absolute;
    font-size: 2em;
    animation: heartBurst 1s ease-out;
    animation-fill-mode: forwards;
    color: #ab9df2;
}</style>
