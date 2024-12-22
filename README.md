# atweb-vue

### Reversible File Path Record Key Specification

Converting file path to Record Key:

Strip leading `.\`, `./`, `\`, `/`.

Replace all backslash and forward characters with `:`.

Replace all other characters not in the regex `/[^A-Za-z0-9.\-]/`
with `'_' || base36 utf-16 char code || '_'`.

To convert in reverse, do the operation in reverse. Slash type is not
preserved (akin to Windows file paths, normalize it to a forward
slash) and all paths are assumed to be absolute.

The tilde character is not used as the PDS rejects it despite being
valid according to the spec.

Example:

```
/neocities-goodmode-sparklehorse/index.mdx
./neocities-goodmode-sparklehorse/index.mdx
neocities-goodmode-sparklehorse\index.mdx
```

becomes:

```
neocities-goodmode-sparklehorse:index.mdx
```