import styles from "./PageNotFound.module.scss";
import PageTitle from "../PageTitle/PageTitle";

const PageNotFound = () => {
    return (
        <div className={styles.pageNotFound}>
            <PageTitle>Page Not Found</PageTitle>
        </div>
    );
};

export default PageNotFound;