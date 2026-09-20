import styles from './InterviewList.module.css';

type InterviewQuestion = {
  id: number;
  question: string;
  answer: string;
};

type InterviewListProps = {
  items: InterviewQuestion[];
};

export const InterviewList = ({ items }: InterviewListProps) => {
  return (
    <ul className={styles.interviewList}>
      {items.map(item => (
        <li key={item.id} className={styles.interviewItem}>
          <h3 className={styles.interviewQuestion}>
            {item.id}. {item.question}
          </h3>
          <p className={styles.interviewAnswer}>{item.answer}</p>
        </li>
      ))}
    </ul>
  );
};
