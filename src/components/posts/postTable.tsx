import { Table , TableBody,TableCell,TableHead,TableHeader,TableRow, TableCaption} from "../ui/table"
import Link from "next/link"
import posts from "../../../data/posts"
import { Post } from "../../../types/post"
import { Button } from "../ui/button"

interface PostsTableProps
{
    limit? : number
    title? : string

}

const PostsTable = ({limit,title} : PostsTableProps) =>
    {
        const sortedPosts : Post[] = [...posts].sort((a,b) => new Date (b.date).getTime - new Date(a.date).getTime())


        return <div className="mt-10">
        <h3 className="text-3xl font-semibold"> 
            {title ? title : "Posts"}
        </h3>
        <Table>
            <TableCaption>
                A list of recent Posts
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Author</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sortedPosts.map(( post ) => {
                    return <TableRow key={post.id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                        <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                        <TableCell>
                            <Link href={`/posts/edit/${post.id}`} >
                            <Button>Edit</Button>
                            </Link>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
        </div>
    }

export default PostsTable