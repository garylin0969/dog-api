import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

interface BreedHeaderProps {
    breedName?: string;
}

const BreedHeader = ({ breedName }: BreedHeaderProps) => {
    return (
        <div className="flex items-center h-full text-white">
            {/* 返回按鈕 */}
            <Link
                href="/"
                scroll={false}
                aria-label="Back to Home"
                title="Back to Home"
                className="flex items-center justify-center"
            >
                <IoIosArrowBack className="text-2xl" />
            </Link>
            {/* 品種名稱 */}
            <h1 className="text-lg font-medium truncate flex-1 text-center">{breedName}</h1>
        </div>
    );
};

export default BreedHeader;
