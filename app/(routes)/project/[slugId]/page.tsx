import ChatInterface from '@/components/chat'
import React from 'react'
import { redirect } from "next/navigation"
import { getAuthServer } from "@/lib/insforge-server"

const Page = async ({ params }: {
  params: Promise<{ slugId: string }>
}) => {
  const { slugId } = await params;
  const { user } = await getAuthServer();

  if (!user) {
    redirect('/');
  }

  return (
    <div>
      <ChatInterface
        key={slugId}
        isProjectPage={true}
        slugId={slugId}
      />
    </div>
  )
}

export default Page
