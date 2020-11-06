import { isFirstEntry } from "./src/is_first_entry";
import { isPcWeb } from "./src/is_pc_web";
import { pageJumpFun } from "./src/page_jump";
import { produceNumber } from "./src/produce_number";

export const h5Api = {
    isFirstEntryEdge: isFirstEntry,
    isPc: isPcWeb,
    pageJump: pageJumpFun,
    prodeceRandomString: produceNumber
}


 