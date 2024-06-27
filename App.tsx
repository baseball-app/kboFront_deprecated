import React from 'react';
import { View } from 'react-native';
import { useFunnel } from './src/hooks/useFunnel';
import Step1 from './src/pages/login/step1';
import Step2 from './src/pages/login/step2';
import Step3 from './src/pages/login/step3';
import Step4 from './src/pages/login/step4';



const App: React.FC = () => {
    const { Funnel, Step, setStep } = useFunnel('Step1');

    return (
        <View >
            <Funnel>
                <Step name="Step1">
                    <Step1 nextStep={() => setStep('Step2')} />
                </Step>
                <Step name="Step2">
                    <Step2 nextStep={() => setStep('Step3')} prevStep={() => setStep('Step1')} />
                </Step>
                <Step name="Step3">
                    <Step3 nextStep={() => setStep('Step4')} prevStep={() => setStep('Step2')} />
                </Step>
                <Step name="Step4">
                    <Step4 prevStep={() => setStep('Step3')} />
                </Step>
            </Funnel>
        </View>
    );
};

export default App;





