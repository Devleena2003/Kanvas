"use client"
import Link from 'next/link';
import React from 'react'
interface BoardCardProps{
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    craetedAt: number;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean
}
function BoardCard({
     id,
    title,
    authorName,
    authorId,
    craetedAt,
    imageUrl,
    orgId,
    isFavorite
}:BoardCardProps) {
  return (
      <Link href={`/board/${id}`}>
          <div className="group-aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
          <div className="relative flex-1 bg-amber-50"></div></div>
      </Link>
  )
}

export default BoardCard
