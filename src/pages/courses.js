import Card from "@/components/Card"
import styles from '../styles/Courses.module.scss'


export default function Courses() {

    return (
        <>
        <h1 className={styles.title}> Courses </h1>
        <h4 className={styles.subtitle}>simple coding lessons and tutorials</h4>
        <hr className={styles.sepparator}/>
            <div className='cards'>
                <Card
                    title='Card Title'
                    img='/image1.png'
                    body='Test Test Test Test'
                    link='courses/pycharm'
                />
                <Card
                    title='Card Title'
                    img='/image1.png'
                    body='Test Test Test Test'
                    link='courses/unity'
                />
                <Card
                    title='Card Title'
                    img='/image1.png'
                    body='Test Test Test Test'
                    link='courses/python'
                />
            </div>

        </>

    );
}



