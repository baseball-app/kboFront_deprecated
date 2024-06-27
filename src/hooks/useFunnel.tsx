import React, { ReactElement, ReactNode, useState } from 'react';

export interface StepProps {
    name: string;
    children: ReactNode;
}

export interface FunnelProps {
    children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string) => {
    // state를 통해 현재 스텝을 관리한다.
    const [step, setStep] = useState(defaultStep);

    // 각 단계를 나타내는 Step 컴포넌트
    const Step = (props: StepProps): ReactElement => {
        return <>{props.children}</>;
    };

    // 여러 단계의 Step 컴포넌트 중 현재 활성화된 스텝을 렌더링하는 Funnel
    const Funnel = ({ children }: FunnelProps) => {
        const currentStep = React.Children.toArray(children).find(
            (child) => React.isValidElement<StepProps>(child) && child.props.name === step
        );

        return <>{currentStep}</>;
    };

    return { Funnel, Step, step, setStep };
};
