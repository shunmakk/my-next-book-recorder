'use client'  
import {useRouter} from 'next/navigation';
import React from 'react';
import { useForm, useFormState } from 'react-hook-form';

const Page = () => {
  const router = useRouter();

  const defaultValue = {
    name: '',
    email: '',
    require: ''
  };

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: defaultValue });

  const onSubmit = data => {
    console.log(data);
    // ページをリフレッシュ
    router.push('/');
  };

  const onError = err => console.log(err);

  return (
    <div className='  flex justify-center items-center flex-col '>
      <div className="border-2 .border-black border-solid w-full max-w-md my-8 pb-10">
      <h2 className='text-center my-12 text-2xl'>お問い合せフォーム</h2>
      <p className='text-center mb-2 text-xs'>*送信してもコンソールにログが出るだけ</p>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className='flex flex-col justify-center items-center 
          '>
        <div className='mt-6 flex flex-row gap-5 ml-2'>
          <label htmlFor='name'>名前:</label>
          <input
            id='name'
            type="text"
            className="border-2 .border-black border-solid"
            {...register('name', {
              required: '名前は必須です（フルネームでお願いします。）',
              minLength: {
                value: 2,
                message: '最低でも2文字で入力してください'
              }
            })}
          />
          <div>{errors.name?.message}</div>
        </div>
        <div className='mt-6 flex flex-row gap-5'>
          <label htmlFor='email'>email:</label>
          <input
            id='email'
            type="text"
            className="border-2 .border-black border-solid"
            {...register('email', {
              required: 'メールアドレスは必須です。',
              pattern: {
                value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                message: 'メールアドレスが不正です'
              }
            })}
          />
          <div>{errors.email?.message}</div>
        </div>
        <div className='mt-6 flex flex-row gap-5 ml-2'>
          <label htmlFor='require'>要件:</label>
          <textarea
            id='require'
            className="border-2 .border-black border-solid"
            rows={5}
            {...register('require', {
              required: '要件は入力必須です',
              minLength: {
                value: 1,
                message: '最低でも1文字で入力してください'
              },
              maxLength: {
                value: 300,
                message: '300文字以内で入力してください'
              }
            })}
          />
          <div>{errors.name?.message}</div>
        </div>
        <button type='submit' className='bg-blue-500  py-2 px-10 mt-6 border  text-white rounded-3xl '>送信</button>
      </form>
      </div>
    </div>
  );
};

export default Page;
