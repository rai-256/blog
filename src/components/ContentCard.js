import Link from 'next/link';
import Image from 'next/image';

export function ContentCard({ title, explanation, img_link, link }) {
  img_link = '/japan.png';
  return (
    <div className="border rounded-md flex">
      <div className="flex-shrink-0" />
      <Image
        src={img_link}
        alt="Content Image"
        width={100}
        height={100}
        className="rounded-l-md"
      />
      <div className="flex-grow p-4">
        <Link href={link}>
          <h2 className="text-xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="text-gray-600">
          {explanation}
        </p>
      </div>
      {/*         
      <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4">
        <img
          src={img_link}
          alt="Content Image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h2 className="text-xl font-bold mt-2">
          {title}
        </h2>
        <p className="text-gray-600 mt-1">
          {explanation}
        </p>
        <a
          href={link}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Read More
        </a>
      </div> */}
    </div>
  );
}
