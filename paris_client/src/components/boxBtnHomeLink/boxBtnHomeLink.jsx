/**
 *  Create a component with the link info to put into homePage component
 * 
 *  "react-icons": "^4.3.1",
 */
import React from 'react';
import { Link } from 'react-router-dom'

import { MdOutlineFoodBank } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { BsPencil } from "react-icons/bs";

const dataBtn = [
    { path: "/", icon: MdOutlineFoodBank },
    { path: "/", icon: GiClothes },
    { path: "/", icon: BsPencil }
]
 
const BoxBtnHomeLink = () => {
    return (
        <>
            {
                dataBtn.map((item, index)  => {
                    return (
                        <Link key={index} to={item.path} className='linkBoxBtn'>
                            { < item.icon className='iconBtnLinkBox'/>}
                        </Link>
                    )
                })
            }
        </>
    )
};

export default BoxBtnHomeLink;
