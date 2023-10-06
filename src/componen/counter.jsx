import { useSelector, useDispatch } from "react-redux";
import { addByAmount, decrement ,increment } from "../store/slice/counterSlice";

function Counter(){
    const {counter} = useSelector(state => state.counterSlice);

    const dispatch = useDispatch();

    console.log(counter, ">>>>")

    return (
    <><>
            <>
                <>
                    <div>Counter Componen</div>
                    <p>Counter {counter} </p>
                </>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
        <button onClick={() => dispatch(addByAmount(50))}>add 5</button></>
    );
}

export default Counter;