import styles from './FrontendInterview.module.css';

import { interviewSections } from '../model/interviewSections';
import { InterviewList } from './InterviewList/InterviewList';
import { InterviewSideNavigation } from './InterviewSideNavigation/InterviewSideNavigation';

const navigationItems = interviewSections.map(({ id, title }) => ({ id, title }));
export function FrontendInterview() {
  return (
    <div className={styles.content}>
      {interviewSections.map(section => (
        <div
          key={section.id}
          id={section.id}
          className={styles.questionSection}
          aria-labelledby={`${section.id}-heading`}
        >
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <InterviewList items={section.questions} />
        </div>
      ))}
      <InterviewSideNavigation items={navigationItems} />
    </div>
  );
}
