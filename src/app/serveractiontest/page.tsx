import { addPost, deletePost } from "@/app/lib/action";
const ServerActionTestPage = () => {



    return (
        <div>
            <h2>Add</h2>
            <form action={addPost}>
                <input name="title" type="text" placeholder="title"  />
                <input name="slug" type="text" placeholder="slug"  />
                <input name="description" type="text" placeholder="description"  />
                <input name="userId" type="text" placeholder="userId"  />
                <button type="submit">Create</button>
            </form>

            <h2>Delete</h2>
            <form action = {deletePost}>
            <input type = "text" name = "id" placeholder = "id"/>
            <button type = "submit">Delete</button>
            </form>
        </div>
    )

}

export default ServerActionTestPage