import React, { forwardRef } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const ColoredToolTip = () => {
  return <span style={{ color: 'yellow' }}>Colored component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  );
});

const TestTippy = () => {
  return (
    <div>
      {/* first Tippy */}
      <div style={{ paddingBottom: '20px' }}>
        <Tippy
          placement='right'
          arrow={false}
          delay={1000}
          content='Basic Tooltip'
        >
          <button>Hover</button>
        </Tippy>
      </div>

      {/* second Tippy */}
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      {/* third Tippy */}
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredToolTip></ColoredToolTip>}>
          <button>Hover</button>
        </Tippy>
      </div>

      {/* third Tippy */}
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredToolTip></ColoredToolTip>}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
};

export default TestTippy;
