import { isFirstEntryFun } from "./src/is_first_entry";
import { isPcWebFun } from "./src/is_pc_web";
import { pageJumpFun } from "./src/page_jump";
import { produceNumberFun } from "./src/produce_number";
import { moneyToCapitalsFun} from "./src/money_to_capitals";
import { getCurrentUrlFun } from "./src/get_current_url";
import { deepCopyFun } from "./src/deep_copy";
import { Check } from "./src/empty_check";
import { charToPxFun, cmToPxFun } from "./src/format_util";

export const h5Api = {
    isFirstEntryEdge: isFirstEntryFun,
    isPc: isPcWebFun,
    pageJump: pageJumpFun,
    prodeceRandomString: produceNumberFun,
    moneyToCapitals: moneyToCapitalsFun,
    getCurrentUrl: getCurrentUrlFun,
    deepCopy: deepCopyFun,
    emptyCheck: Check,
    charToPx: charToPxFun,
    cmToPx: cmToPxFun
}


 