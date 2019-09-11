exports.fname = function (x) {
    if (x.includes("一星直选")) {
        return "yxzhix"
    }
    if (x.includes("猜冠军")) {
        return "yxzhix"
    }
    if (x.includes("一星定位胆")) {
        return "yxzhix"
    }
    if (x.includes("二") && x.includes("直选")) {
        return "exzhx"
    }
    if (x.includes("二") && x.includes("组选")) {
        return "exzx"
    }
    if (x.includes("三") && x.includes("直选")) {
        return "sxzhx"
    }
    if (x.includes("三") && x.includes("组选")) {
        return "sxzxz6"
    }
    if (x.includes("三") && x.includes("组六")) {
        return "sxzxz6"
    }
    if (x.includes("三") && x.includes("组三")) {
        return "sxzxz3"
    }
    if (x.includes("三") && x.includes("一码不定位")) {
        return "sx1mbdw"
    }
    if (x.includes("三") && x.includes("二码不定位")) {
        return "sx2mbdw"
    }
    if (x.includes("四") && x.includes("直选")) {
        return "sixzhx"
    }
    if (x.includes("四") && x.includes("一码不定位")) {
        return "six1mbdw"
    }
    if (x.includes("四") && x.includes("二码不定位")) {
        return "six2mbdw"
    }
    if (x.includes("五") && x.includes("直选")) {
        return "wxzhx"
    }
    if (x.includes("五") && x.includes("一码不定位")) {
        return "wx1mbdw"
    }
    if (x.includes("五") && x.includes("二码不定位")) {
        return "wx2mbdw"
    }
    if (x.includes("五") && x.includes("三码不定位")) {
        return "wx3mbdw"
    }
}