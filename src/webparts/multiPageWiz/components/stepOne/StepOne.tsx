import * as React from 'react';
import styles from '../MultiPageWiz.module.scss';
import MultiPageWiz from '../MultiPageWiz';
import Main from '../main/Main';

export default class StepOne extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                <div className={`ms-Grid-row ms-bgColor-themeSecondary ms-fontColor-white ${styles.row}`}>
                    <span className="ms-font-xl ms-fontColor-white">
                        <b>Good yob! Your 'next' button worked!</b>
                    </span>
                </div>
            </div>
        );
    }
}