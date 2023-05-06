import PropTypes from 'prop-types';
import css from './SectionTtile.module.css';

export const SectionTitle = ({ title, children }) => {
  return (
    <section className={css.wrapper}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
