import { MenuProps } from "antd/lib";

const useLanguageItems = (): { key: string; label: string }[] => {
    const items: MenuProps['items'] = [
        {
            key: 'en',
            label: '🇺🇸 EN',
        },
        {
            key: 'vi',
            label: '🇻🇳 VI',
        },
    ];
    return items.filter((item): item is { key: string; label: string } => item !== null);
};

export default useLanguageItems;