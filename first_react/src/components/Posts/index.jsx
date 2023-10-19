import Button from "../Button"
const Post = (post, onDelete) => {
    return (
        <div key={post.id} className={styles.postCard}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Button title="❌" onClick={() => onDelete(post.id)} />
            <hr />
        </div>
    )


}
export default Post 