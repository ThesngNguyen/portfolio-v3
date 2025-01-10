import React from 'react';
import { Select, ConfigProvider } from 'antd';
import { Flex, Typography } from 'antd/lib';

interface DropdownButtonProps {
  title?: string;
  items: { key: string; label: string; isSelected?: boolean }[];
  onChange: (value: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ items, onChange }) => {
  const handleSelectChange = (value: string) => {
    onChange(value);
  };

  const selectedItem = items.find((item) => item.isSelected);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: 'transparent',
          colorBgContainer: 'transparent',
          colorText: 'white',
          colorTextPlaceholder: 'white',
          colorBorder: 'transparent',
          colorPrimary: 'white',
          fontWeightStrong: 700,
        },
        components: {
          Select: {
            optionSelectedBg: '#00076f',
            selectorBg: 'transparent',
            hoverBorderColor: 'transparent',
          },
        },
      }}
    >
      <Flex gap={4}>
        <Select
          value={selectedItem?.key}
          className="text-base300 md:text-base500 font-bold min-w-12 md:min-w-24 custom-select"
          popupClassName="bg-transparent"
          variant="outlined"
          onChange={handleSelectChange}
        >
          {items.map((item) => (
            <Select.Option
              key={item.key}
              value={item.key}
            >
              <Typography.Text className='flex h-full justify-center text-white text-base300 md:text-base500'>{item.label}</Typography.Text>
            </Select.Option>
          ))}
        </Select>
      </Flex>
    </ConfigProvider>
  );
};

export default DropdownButton;
