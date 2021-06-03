import Tabs from '@/components/Tabs';
import React from 'react';

const Container = () => (
    <div>
        <Tabs>
            <Tabs.Item disabled={false} value="1" label="Tab 1">
                IS this the One
            </Tabs.Item>
            <Tabs.Item disabled={false} value="2" label="Tab 2">
                Si this the next tone
            </Tabs.Item>
        </Tabs>
    </div>
);

export default Container;
