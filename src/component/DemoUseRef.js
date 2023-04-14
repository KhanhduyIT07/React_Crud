import React, { useRef, useState } from 'react';

const DemoUseRef = () => {
    // useRef là gì : nó là 1 hàm trả về 1 đối tượng tham chiếu có thể thay đổi
    // đối tượng này có thuộc tính .current được khởi tạo cho đối số được truyền vào (initialValue)

    // cú pháp :
    // inputRef, abcRef
    const countRef = useRef(0);
    // truy xuất giá trị ref
    // {countRef.current}
    // countRef.current = 10
    // so sash giữa useRef vs useState
    const [count, setCount] = useState(0)
    const handlClick = () => {
        // const updateCount = count + 1;
        // console.log(updateCount);
        // setCount(updateCount)
        countRef.current++
        console.log(countRef.current);
    }
    console.log("Render");
    // khi chúng ta thay đổi state thì component được render lại
    // còn ref khi chúng ta thay đổi thì component không được render lại

    // nâng cao
    // useState: nó là bất đồng bộ vì khi chúng ta update lại state thì giá trị mới đc cập nhật lại sau khi component render
    // useRef: đồng bộ vì khi bấm vào thay đổi luôn mà ko cần render lại compontent
    return (
        <div>
            {/* Demo */}
            {/* {countRef.current} */}

            <button onClick={handlClick}>Kích</button>
        </div>
    );
}

export default DemoUseRef;
