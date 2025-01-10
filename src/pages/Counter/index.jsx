import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, selectCount} from "@/store/slices/counterSlice";

function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>加</button>
            <span style={{margin: "0 20px"}}>{count}</span>
            <button onClick={() => dispatch(decrement())}>减</button>
        </div>
    );
}

export default Counter;
