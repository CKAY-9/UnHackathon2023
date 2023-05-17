"use client";

import Image from "next/image"
import style from "./source.module.scss";
import { useEffect } from "react";
import Link from "next/link";

interface SourceProps {
    url: string,
    id: string
}

const Source = (props: SourceProps) => {
    useEffect(() => {
        if (typeof(document) === undefined) return;
        
        const sourceImg = document.getElementById(`sourceImg${props.id}`);
        const sourceData = document.getElementById(`sourceData${props.id}`);
        if (sourceImg !== null && sourceData !== null) {
            sourceImg.onmouseover = () => {
                sourceData.style.opacity = "1"
                sourceData.style.display = "flex";
            }
            sourceData.onmouseleave = () => {
                sourceData.style.opacity = "0"
                sourceData.style.display = "none"; 
            }
        }
    }, [props.id]);

    return (
        <div className={style.source}>
            <Image id={`sourceImg${props.id}`} sizes="100%" width={0} height={0} alt="Source" src="/question.svg"></Image>
            <div id={`sourceData${props.id}`} className={style.sourceData}><Link href={props.url} target="_blank">{props.url}</Link></div>
        </div>
    );
}

export default Source;