import React, { Component } from 'react';
import { BsHouseFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsStickiesFill } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

export const SidebarData = [
    {
        title: "Home",
        icon: <BsHouseFill />,
        Link: "/home"
    },
    {
        title: "Staff",
        icon: <BsPeopleFill />,
        Link: "/User"
    },
   
    {
        title: "Doctor Message",
        icon: <BsArrowDownCircleFill />,
        Link: "/DoctorChat"
    },
    {
        title: "Staff Message",
        icon: <BsArrowDownCircleFill />,
        Link: "/StaffChat"
    },

    {
        title: "Staff",
        icon: <BsArrowDownCircleFill />,
        Link: "/DoctorChat"
    },
   
]