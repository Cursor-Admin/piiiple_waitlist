import React from 'react'
import Image from 'next/image'
import Assets from '@/constants/assets.constants'

export default function Headshots() {
    return (
        <div>
            <div className="flex headshots [&>img]:rounded-full [&>img]:-mr-2">
                <Image
                    src={Assets.headshot1}
                    alt="checkmark"
                    width={32}
                    height={32}
                    className="w-4 h-4 rounded-full sm:w-8 sm:h-8"
                />
                <Image
                    src={Assets.headshot3}
                    alt="checkmark"
                    width={32}
                    height={32}
                    className="w-4 h-4 sm:w-8 sm:h-8"
                />
                <Image
                    src={Assets.headshot2}
                    alt="checkmark"
                    width={32}
                    height={32}
                    className="w-4 h-4 sm:w-8 sm:h-8"
                />
                <Image
                    src={Assets.headshot4}
                    alt="checkmark"
                    width={32}
                    height={32}
                    className="w-4 h-4 sm:w-8 sm:h-8"
                />
            </div>
        </div>
    )
}
