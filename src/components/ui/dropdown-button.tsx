import React from 'react';
import { Select, ConfigProvider } from 'antd';
import { Flex } from 'antd/lib';

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

  console.log(selectedItem);

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
          className="text-2xl w-24 custom-select"
          popupClassName="bg-transparent"
          variant="outlined"
          onChange={handleSelectChange}
        >
          {items.map((item) => (
            <Select.Option
              key={item.key}
              value={item.key}
              className="text-white"
            >
              {item.label}
            </Select.Option>
          ))}
        </Select>
      </Flex>
    </ConfigProvider>
  );
};

export default DropdownButton;
