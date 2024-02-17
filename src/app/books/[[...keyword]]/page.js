import LinkedBookDetail from "@/components/LinkedBookDetail";
import { getBookByKeyword} from "@/lib/getter";

//ルートパラメーターkeywordを取得（既定値はReact）
export default async function BookResult({params: {keyword="Next.js"}}){

  //与えられたキーワードを元に書籍情報を検索
  const books = await getBookByKeyword(keyword);

  return(
      <>
       {/* 取得した書籍のリストを表示 */}
       {books.map((b,i) => (
           <LinkedBookDetail book={b}  index={  i +1}  key={b.id} />
       ))}
      </>
  )

}