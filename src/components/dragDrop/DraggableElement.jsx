import { Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem';
import { ColumnHeader, DroppableStyles } from './styles/Styled';

const DraggableElement = ({ prefix, elements }) => (
	<DroppableStyles>
		<ColumnHeader>{prefix}</ColumnHeader>
		<Droppable droppableId={`${prefix}`}>
			{(provided) => (
				<div {...provided.droppableProps} ref={provided.innerRef}>
					{elements.map((item, index) => {
						return (
							<ListItem
								key={item.id}
								item={item}
								index={index}
								prefix={prefix}
							/>
						);
					})}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	</DroppableStyles>
);

export default DraggableElement;
