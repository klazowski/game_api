const getData = async (url: string = ''): Promise<any> => {
  const response = await fetch(url);
  if (response.status !== 200) return { success: false };
  return response.json();
};

const postData = async (url: string = '', data: {} = {}): Promise<{ success: boolean }> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.status === 201) return response.json();
  return { success: false };
};

export { getData, postData };
