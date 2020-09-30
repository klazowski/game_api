import { postData } from '../../connectors';
const submit = async (newAction: NewAction): Promise<boolean> => {
  const response = await postData('/actions', newAction);
  return response.success;
};

export default submit;
