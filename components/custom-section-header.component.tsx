import Link from 'next/link'
import router, { useRouter } from 'next/router'
import React, { FunctionComponent} from 'react'

export const CustomSectionHeader:FunctionComponent<{
    title: string,
    pathname: string,
    subpath?: string
}> = ({
    title = '',
    pathname,
    subpath
}) => {

    const route = useRouter()

    return (
        <div className="section-header">
            <div className='section-header__background'>
            </div>
            <div className='section-header__content'>
                <h1 className='header-1'>
                    {title}
                </h1>
                <ul className="path__list">
                    <li className="path__item">
                        <Link href='/'>
                            <a className={
                                `path__link
                                ${route.pathname === '/' ?
                                'active' :
                                ''
                                }
                            `}>
                                home
                            </a>
                        </Link>
                        </li>
                        <li className="path__item">
                            /
                        </li>
                        <li className="path__item">
                        <Link href={
                            `/${pathname}`}>
                            <a className={
                                `path__link
                                ${route.pathname === `/${pathname}` ?
                                'active' :
                                ''
                                }
                            `}>
                                {pathname}
                            </a>
                        </Link>
                    
                    </li>
                    {
                        subpath && (
                            <>
                                <li className="path__item">
                                        /
                                </li>
                                <li className="path__item">
                                <Link href={`
                                    /${pathname}/${subpath}
                                `}>
                                    <a className={
                                        `path__link
                                        ${route.asPath ===  `/${pathname}/${subpath}` ?
                                        'active' :
                                        ''
                                        }
                                    `}>
                                        {subpath}
                                    </a>
                                </Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
            
            
        </div>
    )
}



export default CustomSectionHeader
