import styles from './content.module.scss';
import { dateTime } from '@/components/datetime/datetime';
import Link from 'next/link';

export default function Content({ posts, courses }) {


    return (

        <section className={styles.content}>

            <div className={styles.content__posts}>

                <h2>Latest Posts</h2>

                {posts.edges.map((post, index) => (

                    <Link style={{ textDecoration: 'none' }} key={index} href={post.node.uri.replace('/', '/blog/')}>

                        <div className={styles.content__post} >

                            <p className={styles.post__title}>{post.node.title}</p>

                            <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></div>

                            <p>{dateTime(post.node.date)}</p>

                        </div>

                    </Link>

                ))}

                <Link style={{ fontWeight: 'bold' }} href="/blog">View more →</Link>

            </div>

            <div className={styles.content__courses}>

                <h2>Courses</h2>

                {courses.edges.map((course, index) => (

                    <Link style={{ textDecoration: 'none' }} key={index} href={course.node.uri.replace('/courses/', '/')}>

                        <div className={styles.content__course} >

                            <p className={styles.course__title}>{course.node.title}</p>

                            <div dangerouslySetInnerHTML={{ __html: course.node.excerpt }}></div>

                            <p>{dateTime(course.node.date)}</p>

                        </div>

                    </Link>
                ))}

                <Link style={{ fontWeight: 'bold' }} href="/courses">View more →</Link>

            </div>





        </section>

    )
}