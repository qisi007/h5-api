import { isFirstEntryFun } from "./src/is_first_entry";
import { isPcWebFun } from "./src/is_pc_web";
import { pageJumpFun } from "./src/page_jump";
import { produceNumberFun } from "./src/produce_number";
import { moneyToCapitalsFun} from "./src/money_to_capitals";

export const h5Api = {
    isFirstEntryEdge: isFirstEntryFun,
    isPc: isPcWebFun,
    pageJump: pageJumpFun,
    prodeceRandomString: produceNumberFun,
    moneyToCapitals: moneyToCapitalsFun
}


 