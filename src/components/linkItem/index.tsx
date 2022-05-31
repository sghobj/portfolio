import {Link} from "react-router-dom";
import {ReactNode} from "react";


export type LinkItemProps = {
    to: any,
    children: ReactNode,

}
const LinkItem = ({to, children}: LinkItemProps) => {
    return(
        <Link to={to}>
            {children}
        </Link>
    )
}

export default LinkItem
