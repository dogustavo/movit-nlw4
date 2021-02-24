import React from 'react';
import NextHead from 'next/head';

type HeadProps = {
    title: string,
}

const Seo = ({title}: HeadProps) => {
    return (
        <NextHead>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.png" />
            <meta property="og:title" content={title} key="title" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </NextHead>
    )
}

export default Seo