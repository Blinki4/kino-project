// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {FC} from 'react';

const MyPage: FC = () => {
    return (
        <div className={'page'}>
            <div className={'container'}>
                MY PAGE
            </div>
        </div>
    );
};

export default MyPage;