import React from 'react';
import ToolbarButton from './ToolbarButton';
import { ReactComponent as Bold } from '../assets/bold.svg';
import { ReactComponent as Italic } from '../assets/italic.svg';
import { ReactComponent as Strike } from '../assets/strike.svg';
import { ReactComponent as Blockquote } from '../assets/blockquote.svg';
import { ReactComponent as Link } from '../assets/link.svg';
import { ReactComponent as Image } from '../assets/image.svg';
import { ReactComponent as Codeblock } from '../assets/codeblock.svg';

const tools = [
  { type: 'header', value: 1 },
  { type: 'header', value: 2 },
  { type: 'header', value: 3 },
  { type: 'header', value: 4 },
  { type: 'separator' },
  { type: 'icon', Icon: Bold },
  { type: 'icon', Icon: Italic },
  { type: 'icon', Icon: Strike },
  { type: 'separator' },
  { type: 'icon', Icon: Blockquote },
  { type: 'icon', Icon: Link },
  { type: 'icon', Icon: Image },
  { type: 'icon', Icon: Codeblock }
];
const Separator = () => <div className='separator'></div>;

function CodeToolbar() {
  return (
    <div className='CodeToolbar'>
      {tools.map((tool, index) => {
        if (tool.type === 'separator') {
          return <Separator key={index} />;
        }
        if (tool.type === 'header') {
          return (
            <ToolbarButton key={tool.value} value={tool.value}>
              <div className='Toolheader'>H<span>{tool.value}</span></div>
            </ToolbarButton>
          );
        }
        if (tool.type === 'icon') {
          const IconComponent = tool.Icon;
          return (
            <ToolbarButton key={index}>
              <IconComponent />
            </ToolbarButton>
          );
        }
        return null;
      })}
    </div>
  );
}

export default CodeToolbar;