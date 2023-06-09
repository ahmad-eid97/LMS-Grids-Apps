import React from "react";
import Link from "next/link.js";

import cls from './categoryFive.module.scss'

const CategoryFive = (props) => {
    return (
        <>
            <Link href="#">
                <div className={`${cls.category} ${"bgColored"}`}>
                    <div className={cls.positionAbsolute}>
                        <svg width="271" height="118" viewBox="0 0 271 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1" d="M269.312 7.40514C271.872 4.73662 270.016 2.22776e-05 266.318 2.19544e-05L4.00001 -9.78235e-07C1.79087 -1.17136e-06 1.01593e-05 1.79086 9.96619e-06 4L5.49873e-07 111.71C4.04376e-07 113.374 1.02621 114.878 2.61076 115.387C7.79266 117.052 13.3972 118 19.4685 118C77.3412 118 95.9215 67.773 122.105 52.9349C148.323 38.0968 184.347 68.3665 215.468 56.9412C235.885 49.417 252.645 24.7789 269.312 7.40514Z" fill="white"></path>
                        </svg>

                    </div>
                    <div className={cls.iconContainer}>
                        <div className={cls.icon}>
                            <i className="fas fa-bezier-curve"></i>
                        </div>

                    </div>

                    <div className={cls.cardFooter}>
                        <h5 className="mb-0 line-clamp-1">Design</h5>
                        <p className="mb-0 line-clamp-1">Over 960 Courses</p>
                    </div>
                </div>

            </Link>
            <style jsx>{`
        .bgColored {
            background-color: ${props.bgColor};
        }

      `}</style>
        </>
    )
}

export default CategoryFive;