import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "@/store/slices/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    加
                </button>
                <span style={{margin: "0 20px"}}>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    减
                </button>
            </div>
        </div>
    );
}

export default Counter;
