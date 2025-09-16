import React from 'react'
import Image from 'next/image'

export default function Headshots() {
    return (
        <div>
            <div className="flex headshots [&>img]:rounded-full [&>img]:-mr-2">
                <Image
                    src="/headshot (1).png"
                    alt="checkmark"
                    width={32}
                    height={32}
                    className="w-4 h-4 rounded-full sm:w-8 sm:h-8"
                />
                <Image
                    src="/headshot (3).png"
                    alt="checkmark"
                    width={32}
                    height={32}
                    className="w-4 h-4 sm:w-8 sm:h-8"
                />
                <Image
                    src="/headshot (2).png"
                    alt="checkmark"
                    width={32}
                    height={32}
                    className="w-4 h-4 sm:w-8 sm:h-8"
                />
                <Image
                    src="/headshot (4).png"
                    alt="checkmark"
                    width={32}
                    height={32}
                    className="w-4 h-4 sm:w-8 sm:h-8"
                />
            </div>
        </div>
    )
}
