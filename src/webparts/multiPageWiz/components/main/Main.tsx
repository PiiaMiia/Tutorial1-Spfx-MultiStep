import * as React from 'react';
import styles from '../MultiPageWiz.module.scss';
import MultiPageWiz from '../MultiPageWiz';
import StepOne from '../stepOne/StepOne';

export default class Main extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            step: 0
        };
    }   

    public render(): JSX.Element {
        return (
            <div>
                 <div className={styles.helloWorld}>  
                    <div className={styles.container}>
                        <div className={`ms-Grid-row ms-bgColor-themeSecondary ms-fontColor-white ${styles.row}`}>
                            {this.state.step < 1 &&
                                <span className="ms-font-xl ms-fontColor-white"><b>Create a group for your client! Click NEXT to begin.</b></span>
                            }
                            {this.state.step == 1 &&
                                <StepOne />
                            }
                            <div className="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg8">
                                {this.state.step > 0 &&
                                    <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
                                        <a href="#" className={`${styles.button}`} onClick={() => this.previousStep()}>
                                            <span className={styles.label} >BACK</span>
                                        </a>
                                    </div>
                                }
                            </div>
                            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
                                <a href="#" className={`${styles.button}`} onClick={() => this.nextStep()}>
                                    <span className={styles.label}>NEXT</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private previousStep(): void {
        this.setState({
            step: this.state.step - 1
        });
        console.log(this.state.step);
    }

    private nextStep(): void {
        this.setState({
            step: this.state.step + 1
        });
        console.log(this.state.step);
    }

}