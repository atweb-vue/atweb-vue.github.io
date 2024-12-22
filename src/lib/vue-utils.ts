import type { Slot, VNode, VNodeArrayChildren, Slots } from "vue";

export function getSlotChildrenText(children: Slot | VNode[] | VNodeArrayChildren | undefined): string {
    if (!children) return '';
    if (!Array.isArray(children)) children = children();

    return children.map(node => {
        if (!node) return '';
        if (typeof node !== 'object') return '' + node;
        if (Array.isArray(node)) return getSlotChildrenText(node);
        if (!node.children || typeof node.children === 'string') return node.children || '';
        if (Array.isArray(node.children)) return getSlotChildrenText(node.children);
        if (node.children.default) return getSlotChildrenText((node.children as any as Slots).default?.());
    }).join('');
}
