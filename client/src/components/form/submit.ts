import { postData } from '../../connectors';
const submit = async (newAction: NewAction): Promise<boolean> => {
  const response = await postData('http://localhost:5001/actions', newAction);
  return response.success;
};

export default submit;
