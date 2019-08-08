@extends('layouts.app')

@section('page-title', trans('app.roles'))
@section('page-heading', trans('app.roles'))

@section('breadcrumbs')
    <li class="breadcrumb-item active">
        @lang('app.roles')
    </li>
@stop

@section('content')

    @include('partials.messages')

    <div class="card">
        <div class="card-body">
            <div class="row mb-3 pb-3 border-bottom-light">
                <div class="col-lg-12">
                    <div class="float-right">
                        <a href="{{ route('role.create') }}" class="btn btn-primary btn-rounded">
                            <i class="fas fa-plus mr-2"></i>
                            @lang('app.add_role')
                        </a>
                    </div>
                </div>
            </div>

            <role-component></role-component>
        </div>
    </div>
@stop
