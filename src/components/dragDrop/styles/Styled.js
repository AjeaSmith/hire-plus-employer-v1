import styled from 'styled-components';

// DRAGLIST component styles
export const DragDropContextContainer = styled.div`
	padding: 20px;
`;
export const ListGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 8px;
`;

// LISTITEM component styles
export const CardHeader = styled.div`
	font-weight: 500;
`;

export const DragItem = styled.div`
	padding: 15px;
	border-radius: 6px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	background: #252731;
	margin: 0 0 8px 0;
	display: grid;
	grid-gap: 20px;
	color: white;
	flex-direction: column;
`;

// DRAGGABLE ELEMENT component styles
export const ColumnHeader = styled.div`
	margin-bottom: 20px;
`;
export const DroppableStyles = styled.div`
	padding: 10px;
	border-radius: 6px;
	background: white;
`;
