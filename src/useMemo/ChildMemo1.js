import { memo } from "react";

const ChildeMemo = (props) => {
    console.log('child =>', props.data)
    return(
        <>
        <h1>Child</h1>
        </>
    )
}
export default memo(ChildeMemo);