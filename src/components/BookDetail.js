import Image from "next/image";

export default function BookDetail({index,book}){
    return(
    <div className="flex w-full mb-4">
        <div>
        {/* 本の写真 */}
            <Image src={book.image} alt=""  width={140} height={180} />
        </div>
        <div>
        {/* 書籍情報をリスト表示　(index属性が表示されたら連番も表示)。 */}
        <ul className="list-none text-black ml-4">
         <li>{index && index + '+'}</li>
         <li>{book.title}({book.price}円)</li>
         <li>{book.author}</li>
         <li>{book.publisher}刊</li>
         <li>{book.published}発売</li>
        </ul>
        </div>
    </div>
    );
}