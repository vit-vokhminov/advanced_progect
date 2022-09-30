import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>,
    );
}

// в index.tsx мы импортировали интенс i18next: import './shared/config/i18n/i18n';
// а для тестов берём изолированный компонент без инстанса, в качестве этого инстанса будет выступать этот hoc